import type { DonationRequest, Product } from './types'

const API_BASE_URL = process.env.NEXT_PUBLIC_FOODSHARE_API_URL?.replace(/\/$/, '')

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE_URL) throw new Error('Mode démonstration : API Python non configurée.')
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })
  if (!response.ok) throw new Error(`Le serveur a répondu avec le statut ${response.status}.`)
  return response.json() as Promise<T>
}

export const foodShareApi = {
  getStock: () => request<Product[]>('/stock'),
  getRequests: () => request<DonationRequest[]>('/requests'),
  submitRequest: (payload: { association: string; product: string; quantity: number }) =>
    request<DonationRequest>('/requests', { method: 'POST', body: JSON.stringify(payload) }),
}
export const isApiConfigured = Boolean(API_BASE_URL)
