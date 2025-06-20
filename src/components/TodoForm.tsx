import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAdd(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8 p-4 bg-surface rounded-xl shadow-lg">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="flex-grow bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary transition-all duration-200"
      />
      <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg">
        <Plus className="mr-2 h-4 w-4" /> Add Task
      </Button>
    </form>
  );
}
