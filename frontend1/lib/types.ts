export type Product = { name: string; quantity: number; unit: string; color: string }
export type RequestStatus = 'En attente' | 'Acceptée' | 'Refusée'
export type DonationRequest = { id: string; association: string; product: string; quantity: number; date: string; status: RequestStatus; response: string }

export const initialProducts: Product[] = [
  { name: 'Riz', quantity: 50, unit: 'kg', color: '#16A34A' },
  { name: 'Pâtes', quantity: 40, unit: 'kg', color: '#E7A33E' },
  { name: 'Huile', quantity: 20, unit: 'L', color: '#7C9B54' },
  { name: 'Farine', quantity: 30, unit: 'kg', color: '#C4A77D' },
  { name: 'Sucre', quantity: 25, unit: 'kg', color: '#8FA7B1' },
]
export const associations = [
  { name: 'Association A', contact: 'contact@association-a.fr', requests: 12, received: 85, status: 'Active' },
  { name: 'Association B', contact: 'bonjour@association-b.fr', requests: 8, received: 62, status: 'Active' },
  { name: 'Association C', contact: 'contact@association-c.fr', requests: 5, received: 38, status: 'En attente' },
]
export const initialRequests: DonationRequest[] = [
  { id: 'FD-0248', association: 'Association A', product: 'Riz', quantity: 12, date: 'Aujourd’hui, 10:42', status: 'Acceptée', response: 'Demande acceptée — stock mis à jour.' },
  { id: 'FD-0247', association: 'Association B', product: 'Huile', quantity: 8, date: 'Aujourd’hui, 09:18', status: 'En attente', response: 'En attente de traitement par le serveur.' },
  { id: 'FD-0246', association: 'Association C', product: 'Pâtes', quantity: 50, date: 'Hier, 16:35', status: 'Refusée', response: 'Stock insuffisant : 40 kg disponibles.' },
  { id: 'FD-0245', association: 'Association A', product: 'Farine', quantity: 10, date: 'Hier, 14:02', status: 'Acceptée', response: 'Demande acceptée — stock mis à jour.' },
]
export const navItems = [
  { href: '/', label: 'Tableau de bord', icon: 'grid' },
  { href: '/stock', label: 'Gestion du stock', icon: 'box' },
  { href: '/associations', label: 'Associations', icon: 'users' },
  { href: '/requests', label: 'Demandes de dons', icon: 'clipboard' },
  { href: '/submit', label: 'Nouvelle demande', icon: 'plus' },
  { href: '/statistics', label: 'Statistiques', icon: 'chart' },
]
