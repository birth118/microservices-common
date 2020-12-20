import { Subjects } from './subjects'
import { OrderStatus } from './types/order-status'

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled
  data: {
    id: string
    // userId: string
    // status: OrderStatus.Cancelled
    // expiresAt: string // will use JSON.parse/stringigy() at in and out
    ticket: {
      id: string
      // price: number
    }
  }
}
