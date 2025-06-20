import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '@/types/todo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle2 } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  return (
    <Card className="bg-surface border-border shadow-xl rounded-xl p-6">
      <CardHeader className="pb-4 px-0 pt-0">
        <CardTitle className="text-3xl font-bold text-foreground text-center">Your Tasks</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        {todos.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground flex flex-col items-center justify-center">
            <CheckCircle2 className="h-16 w-16 text-primary mb-4 animate-bounce-in" />
            <p className="text-xl font-semibold">No tasks yet!</p>
            <p className="text-md mt-2">Start by adding a new task above.</p>
          </div>
        ) : (
          <ScrollArea className="h-[400px] pr-4">
            {pendingTodos.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 border-b border-border pb-2">Pending Tasks ({pendingTodos.length})</h3>
                {pendingTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
                ))}
              </div>
            )}
            {completedTodos.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-3 border-b border-border pb-2">Completed Tasks ({completedTodos.length})</h3>
                {completedTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
                ))}
              </div>
            )}
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
