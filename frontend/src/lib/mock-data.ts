import { type QuestInfo } from "./contracts/quest"

export const mockQuestStats = {
  activeTracks: 12,
  totalEnrolled: 145,
  completedTasks: 89,
  avgProgress: 68
}

export const mockMilestones = [
  { id: 1, title: "Smart Contract Basics", description: "Understand Soroban and Rust", isCompleted: true },
  { id: 2, title: "State Management", description: "Manage ledger storage", isCompleted: true },
  { id: 3, title: "Auth & Testing", description: "Secure your contracts", isCompleted: false },
]

export const mockQuests: QuestInfo[] = [
  {
    id: 1,
    name: "Soroban 101",
    description: "Intro to Stellar smart contracts",
    owner: "GA...123",
    category: "Development",
    tags: ["Rust", "WASM"],
    is_public: true
  },
  {
    id: 2,
    name: "Solidity Masterclass",
    description: "Deep dive into EVM",
    owner: "GB...456",
    category: "Security",
    tags: ["Solidity", "Security"],
    is_public: true
  }
]
