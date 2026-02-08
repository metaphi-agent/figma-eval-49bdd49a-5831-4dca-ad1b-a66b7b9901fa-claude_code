import { useState } from 'react';
import { Card, Avatar, Input, Icons } from '../components/ui';
import { chatContacts, chatMessages } from '../data/mockData';

type Tab = 'All' | 'Personal' | 'Teams';

export function Messages() {
  const [activeTab, setActiveTab] = useState<Tab>('Personal');
  const [selectedContact, setSelectedContact] = useState(chatContacts[2]);

  return (
    <div className="flex gap-6 h-[calc(100vh-48px)]">
      {/* Contacts List */}
      <Card className="w-[320px] flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text">Message</h2>
          <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
            {Icons.plus}
          </button>
        </div>

        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">{Icons.search}</span>
          <Input placeholder="Search" className="pl-10" />
        </div>

        <div className="flex gap-4 mb-4 border-b border-border">
          {(['All', 'Personal', 'Teams'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={[
                'pb-2 text-sm font-medium border-b-2 transition-colors',
                activeTab === tab ? 'text-primary border-primary' : 'text-text-muted border-transparent hover:text-text',
              ].join(' ')}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto space-y-2">
          {chatContacts.map((contact, i) => {
            const isActive = contact.name === selectedContact?.name;
            return (
              <div
                key={i}
                onClick={() => setSelectedContact(contact)}
                className={[
                  'flex items-center gap-3 p-3 rounded-[var(--radius-md)] cursor-pointer transition-colors',
                  isActive ? 'bg-primary-bg' : 'hover:bg-background-alt',
                ].join(' ')}
              >
                <Avatar name={contact.name} size="md" status={contact.active ? 'online' : undefined} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={['text-sm font-semibold truncate', isActive ? 'text-primary' : 'text-text'].join(' ')}>{contact.name}</p>
                    <span className="text-[10px] text-text-muted shrink-0">{contact.time}</span>
                  </div>
                  <p className="text-xs text-text-muted truncate">{contact.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col" padding="none">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar name={selectedContact?.name || ''} size="md" status="online" />
            <div>
              <p className="font-semibold text-text">{selectedContact?.name}</p>
              <p className="text-xs text-green">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-text-muted hover:text-text hover:bg-background-alt rounded-[var(--radius-md)]">
              {Icons.phone}
            </button>
            <button className="p-2 text-text-muted hover:text-text hover:bg-background-alt rounded-[var(--radius-md)]">
              {Icons.video}
            </button>
            <button className="p-2 text-text-muted hover:text-text hover:bg-background-alt rounded-[var(--radius-md)]">
              {Icons.more}
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.map((msg, i) => (
            <div key={i} className={['flex gap-3', msg.sender === 'me' ? 'justify-end' : ''].join(' ')}>
              {msg.sender === 'other' && <Avatar name={selectedContact?.name || ''} size="sm" />}
              <div className={['max-w-[70%]', msg.sender === 'me' ? 'text-right' : ''].join(' ')}>
                {msg.text && (
                  <div className={[
                    'inline-block px-4 py-2 rounded-[var(--radius-lg)] text-sm',
                    msg.sender === 'me' ? 'bg-primary text-white' : 'bg-orange-light text-text',
                  ].join(' ')}>
                    {msg.text}
                    <span className={['block text-[10px] mt-1', msg.sender === 'me' ? 'text-white/70' : 'text-text-muted'].join(' ')}>
                      {msg.time}
                    </span>
                  </div>
                )}
                {msg.images && msg.images.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {msg.images.map((_, j) => (
                      <div key={j} className="w-32 h-24 bg-background-alt rounded-[var(--radius-md)]" />
                    ))}
                  </div>
                )}
              </div>
              {msg.sender === 'me' && <Avatar name="Me" size="sm" />}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <button className="text-text-muted hover:text-text">{Icons.attachment}</button>
            <Input placeholder="Type a message..." className="flex-1" />
            <button className="text-text-muted hover:text-text">{Icons.smile}</button>
            <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              {Icons.send}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
