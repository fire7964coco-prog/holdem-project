export interface ChatMessage {
  id: string;
  user_id: string;
  nickname: string;
  language: string;
  content: string;
  created_at: string;
}

/** Initial fetch, history pagination and Realtime may overlap. Keep one chronological copy. */
export function mergeChatMessages(previous: ChatMessage[], incoming: ChatMessage[]): ChatMessage[] {
  const byId = new Map(previous.map((message) => [message.id, message]));
  incoming.forEach((message) => byId.set(message.id, message));
  return [...byId.values()].sort((a, b) => a.created_at.localeCompare(b.created_at) || a.id.localeCompare(b.id));
}
