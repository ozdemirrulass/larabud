"use client";
import { getWorkspaces } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import WorkspaceSwitcherSkeleton from './workspace-switcher-skeleton';

const WorkspaceSwitcher = () => {
    const { data, error, isLoading } = useQuery(
        {
            queryKey: ['wait'],
            queryFn: async () => await getWorkspaces(),
        }
    );
    if (isLoading) return <WorkspaceSwitcherSkeleton />;

    return <>{JSON.stringify(data)}</>;
};

export default WorkspaceSwitcher;
