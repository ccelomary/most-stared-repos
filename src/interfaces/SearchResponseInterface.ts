
interface Repository {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    id: number
    avatar_url: string
    url: string
  }
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  created_at: string
  updated_at: string
  pushed_at: string
  homepage: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  forks_count: number
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
  }
  topics: string[]
  forks: number
  open_issues: number
  watchers: number
}

interface SearchResponseInterface {
  total_count: number
  incomplete_results: boolean
  items: Repository[]
}

export default SearchResponseInterface
