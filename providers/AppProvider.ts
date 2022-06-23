import { ApplicationContract } from '@ioc:Adonis/Core/Application'
// import OrderService from 'App/Controllers/Http/Services/OrderService'
// import OrderRepository from 'App/Controllers/Http/Repositories/OrderRepository'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    // const { default: OrderRepository } = await import(
    //   'App/Controllers/Http/Repositories/OrderRepository'
    // )
    // const { default: OrderService } = await import('App/Controllers/Http/Services/OrderService')
    // this.app.container.singleton('OrderRepositoryInterface', () => new OrderRepository())
    // this.app.container.singleton("OrderService", () => new OrderService(new OrderRepository()));
    // this.app.container.singleton(
    //   'App/Controllers/Http/Interfaces/OrderRepositoryInterface',
    //   async () => {
    //     return new OrderRepository()
    //   })
    //
    // this.app.container.singleton('Order/OrderService', () => {
    //   const repo = this.app.container.use(
    //     'App/Controllers/Http/Interfaces/OrderRepositoryInterface'
    //   )
    //   return new OrderService(repo)
    // })
  }

  public async boot() {
    // IoC container is ready
    // const { default: OrderRepository } = await import(
    //   'App/Controllers/Http/Repositories/OrderRepository'
    // )
    // const { default: OrderService } = await import('App/Controllers/Http/Services/OrderService')
    // this.app.container.singleton('OrderRepositoryInterface', () => new OrderRepository())
    // this.app.container.singleton('OrderService', () => new OrderService(new OrderRepository()))
  }

  public async ready() {
    // App is ready
    const { default: OrderRepository } = await import(
      'App/Controllers/Http/Repositories/OrderRepository'
    )

    const { default: OrderService } = await import('App/Controllers/Http/Services/OrderService')

    this.app.container.singleton(
      'App/Controllers/Http/Interfaces/OrderRepositoryInterface',
      () => new OrderRepository()
    )

    this.app.container.singleton('Order/OrderService', () => {
      const repo = this.app.container.use(
        'App/Controllers/Http/Interfaces/OrderRepositoryInterface'
      )
      return new OrderService(repo)
    })
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
