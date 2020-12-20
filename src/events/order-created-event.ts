import { Subjects } from './subjects'
import { OrderStatus } from './types/order-status'

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated
  data: {
    id: string
    userId: string
    status: OrderStatus
    expiresAt: string // will use JSON.parse/stringigy() at in and out
    ticket: {
      id: string
      price: number
    }
  }
}
