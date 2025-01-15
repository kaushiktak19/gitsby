'use client'

import { Button } from '@/components/ui/button'
import useProject from '@/hooks/use-project'
import useRefectch from '@/hooks/use-refetch'
import { api } from '@/trpc/react'
import React from 'react'
import { toast } from 'sonner'

const ArchiveButton = () => {
    const archiveProject = api.project.archiveProject.useMutation()
    const { projectId } = useProject()
    const refetch = useRefectch()
    return (
        <Button disabled={archiveProject.isPending} size='sm' variant='destructive' onClick={() => {
            const confirm = window.confirm("Are you sure you want to archive this project ?")
            if (confirm) archiveProject.mutate({projectId: projectId}, {
                onSuccess: () => {
                    toast.success("Project Archived")
                    refetch()
                },
                onError: () => {
                    toast.error("Failed to archive project")
                }
            })
        }}>
            Archive
        </Button>
    )
}

export default ArchiveButton
