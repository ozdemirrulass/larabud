import { createWorkspace } from '@/lib/actions';
import { Input } from '@repo/ui/components/ui/input'
import { Label } from '@repo/ui/components/ui/label'
import React, { PropsWithChildren } from 'react'
import { useFormState } from 'react-dom';

const WorkspaceForm = ({ children }: PropsWithChildren) => {
    const [state, action] = useFormState(createWorkspace, undefined)
    return (
        <form action={action}>
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Workspace name</Label>
                        <Input id="name" name='name' placeholder="Acme Inc." />
                    </div>
                </div>
            </div>
            {children}
        </form>
    )
}

export default WorkspaceForm