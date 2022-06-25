import OrderRepositoryInterface from 'App/Controllers/Http/Interfaces/OrderRepositoryInterface'

export default class OrderService {
  public orderRepository: OrderRepositoryInterface

  constructor(orderRepository: OrderRepositoryInterface) {
    this.orderRepository = orderRepository
  }

  public async createOrder(newOrder: {}): Promise<boolean> {
    return this.orderRepository.createOrder(newOrder)
  }

  public async deleteOrder(orderId: string): Promise<any> {
    return this.orderRepository.deleteOrder(orderId)
  }

  public async getAllOrders(): Promise<any> {
    return this.orderRepository.getAllOrders()
  }

  public async getFulfilledOrders(): Promise<any> {
    return this.orderRepository.getFulfilledOrders()
  }

  public async getOrderById(orderId: string): Promise<any> {
    return this.orderRepository.getOrderById(orderId)
  }

  public async updateOrder(orderId: string, updatedOrder: {}): Promise<any> {
    return this.orderRepository.updateOrder(orderId, updatedOrder)
  }
}
