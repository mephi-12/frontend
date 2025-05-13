import { scoreApi } from '@shared/api/score'
import { use } from '@shared/utils/use'
import React from 'react'

import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import moment from 'moment';

interface Problem {
  id: string;
  statement: string;
  type: string;
  state: string;
  sessionId: string;
}

interface CompetitionResult {
  id: string;
  createdAt: number[];
  state: string;
  userId: string;
  problems: Problem[];
  group: string;
}

const ResultsPage = () => {
  const [data, setData] = useState<CompetitionResult[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const mockData: CompetitionResult[] = await scoreApi.tasksInfo()
      const withGroups = mockData.map((item, index) => ({
        ...item,
        group: index % 2 === 0 ? 'Б23-501' : 'Б23-544'
      }));
      setData(withGroups);
    };
    fetchData();
  }, []);
  const columns: ColumnsType<CompetitionResult> = [
    {
      title: 'Группа',
      dataIndex: 'group',
      key: 'group',
      filters: [
        { text: 'Б23-501', value: 'Б23-501' },
        { text: 'Б23-544', value: 'Б23-544' },
      ],
      onFilter: (value, record) => record.group === value,
      sorter: (a, b) => a.group.localeCompare(b.group),
      render: (group) => (
        <Tag color={group === 'Б23-501' ? 'geekblue' : 'green'}>
          {group}
        </Tag>
      ),
    },
    {
      title: 'Дата создания',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => {
        const dateA = new Date(a.createdAt[0], a.createdAt[1] - 1, ...a.createdAt.slice(2));
        const dateB = new Date(b.createdAt[0], b.createdAt[1] - 1, ...b.createdAt.slice(2));
        return dateA.getTime() - dateB.getTime();
      },
      render: (createdAt) => {
        const [year, month, day, hour, minute, second] = createdAt;
        return moment([year, month - 1, day, hour, minute, second]).format('DD.MM.YYYY HH:mm:ss');
      },
    },
    {
      title: 'Пользователь',
      dataIndex: 'userId',
      key: 'userId',
      sorter: (a, b) => a.userId.localeCompare(b.userId),
      render: (userId) => userId.slice(0, 8) + '...',
    },
    {
      title: 'Статус',
      dataIndex: 'state',
      key: 'state',
      filters: [
        { text: 'SOLVED', value: 'SOLVED' },
        { text: 'NEW', value: 'NEW' },
      ],
      onFilter: (value, record) => record.state === value,
      sorter: (a, b) => a.state.localeCompare(b.state),
      render: (state) => (
        <Tag color={state === 'SOLVED' ? 'green' : 'volcano'}>
          {state === 'SOLVED' ? 'Завершено' : 'Идет'}
        </Tag>
      ),
    },
    {
      title: 'Задачи',
      dataIndex: 'problems',
      key: 'problems',
      sorter: (a, b) => a.problems.length - b.problems.length,
      render: (problems: Problem[]) => {
        const solvedCount = problems.filter(p => p.state === 'SOLVED').length;
        const totalCount = problems.length;
        let color = '';
        if (solvedCount === 0) {
          color = '#fff1f0';
        } else if (solvedCount <= 2) {
          color = '#fffbe6';
        } else {
          color = '#f6ffed';
        }
    
        const textColor = solvedCount === 0 ? '#ff4d4f' : 
                         solvedCount <= 2 ? '#faad14' : 
                         '#52c41a';
    
        return (
          <div 
            style={{ 
              backgroundColor: color,
              padding: '8px 12px',
              borderRadius: '4px',
              display: 'inline-block',
              color: textColor,
              fontWeight: 500,
            }}
          >
            {totalCount} (
            <span style={{ color: textColor }}>
              {solvedCount} решено
            </span>
            )
          </div>
        );
      },
    },
  ];
  return (
    <Table
      style={{marginTop: '50px'}}
      columns={columns}
      dataSource={data}
      rowKey="id"
      bordered
      size="middle"
      scroll={{ x: 'max-content' }}
    />
  );
}

export default ResultsPage
