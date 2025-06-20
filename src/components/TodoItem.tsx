import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-background rounded-lg shadow-md mb-3 transition-all duration-300 ease-in-out transform hover:scale-[1.01] ${
        todo.completed ? 'opacity-70 border-l-4 border-success' : 'border-l-4 border-primary'
      }`}
    >
      <div className="flex items-center space-x-3">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="h-5 w-5 border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors duration-200"
        />
        <Label
          htmlFor={`todo-${todo.id}`}
          className={`text-lg font-medium cursor-pointer ${
            todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'
          } transition-all duration-200`}
        >
          {todo.text}
        </Label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-destructive hover:bg-destructive/20 transition-colors duration-200"
        aria-label={`Delete task: ${todo.text}`}
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
