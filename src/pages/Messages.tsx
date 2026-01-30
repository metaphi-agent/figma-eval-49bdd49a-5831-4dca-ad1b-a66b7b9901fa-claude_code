import { useState } from 'react';
import { PageLayout } from '../components/blocks';
import { Card, Avatar, Input } from '../components/ui';
import { conversations, chatMessages } from '../data/mockData';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const MenuDots = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-text-muted">
    <circle cx="12" cy="5" r="1"/>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="12" cy="19" r="1"/>
  </svg>
);

const AttachIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
  </svg>
);

const EmojiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

export default function Messages() {
  const [activeConversation, setActiveConversation] = useState(conversations[2]);
  const [messageInput, setMessageInput] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Personal' | 'Teams'>('Personal');

  return (
    <PageLayout>
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-120px)]">
        {/* Conversations List */}
        <Card className="flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-text">Message</h2>
            <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 px-4 pl-10 bg-background-alt rounded-[10px] text-sm"
            />
            <SearchIcon />
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 border-b border-border">
            {(['All', 'Personal', 'Teams'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto space-y-1">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveConversation(conv)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeConversation?.id === conv.id
                    ? 'bg-primary-bg/30'
                    : 'hover:bg-background-alt'
                }`}
              >
                <div className="relative">
                  <Avatar src={conv.avatar} alt={conv.name} size="md" />
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green rounded-full border-2 border-surface" />
                  )}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-text truncate">{conv.name}</span>
                    <span className="text-xs text-text-muted">{conv.time}</span>
                  </div>
                  <p className="text-sm text-text-muted truncate">{conv.message}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="col-span-2 flex flex-col overflow-hidden">
          {activeConversation && (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <Avatar src={activeConversation.avatar} alt={activeConversation.name} size="md" />
                  <div>
                    <h3 className="font-semibold text-text">{activeConversation.name}</h3>
                    <span className="text-xs text-green">Online</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
                    <PhoneIcon />
                  </button>
                  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
                    <VideoIcon />
                  </button>
                  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
                    <MenuDots />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender !== 'me' && (
                      <Avatar src={activeConversation.avatar} alt="" size="sm" className="mr-2 mt-auto" />
                    )}
                    <div className={`max-w-[70%] ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                      {msg.text && (
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            msg.sender === 'me'
                              ? 'bg-orange text-white rounded-br-none'
                              : 'bg-orange-light text-text rounded-bl-none'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <span className={`text-[10px] mt-1 block text-right ${msg.sender === 'me' ? 'text-white/70' : 'text-text-muted'}`}>
                            {msg.time}
                          </span>
                        </div>
                      )}
                      {msg.images && (
                        <div className="flex gap-2 mt-2">
                          {msg.images.map((img, i) => (
                            <img key={i} src={img} alt="" className="w-32 h-24 object-cover rounded-lg" loading="lazy" />
                          ))}
                        </div>
                      )}
                    </div>
                    {msg.sender === 'me' && (
                      <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="" size="sm" className="ml-2 mt-auto" />
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
                    <AttachIcon />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 h-11 px-4 bg-transparent border-none outline-none text-sm text-text placeholder:text-text-muted"
                  />
                  <button className="p-2 hover:bg-background-alt rounded-lg transition-colors">
                    <EmojiIcon />
                  </button>
                  <button className="p-2 hover:bg-primary-bg rounded-lg transition-colors">
                    <SendIcon />
                  </button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </PageLayout>
  );
}
