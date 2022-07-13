import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
    await this.setupOrderBindings()
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }

  private async setupOrderBindings() {
    const { default: OrderRepository } = await import(
      'App/Controllers/Http/Repositories/OrderRepository'
    )
    const { default: OrderService } = await import('App/Controllers/Http/Services/OrderService')

    const { default: OrderController } = await import(
      'App/Controllers/Http/Controllers/OrderController'
    )

    this.app.container.singleton(
      'App/Controllers/Http/Interfaces/OrderRepositoryInterface',
      () => new OrderRepository(),
    )

    this.app.container.singleton('App/Controllers/Http/Services/OrderService', () => {
      const repo = this.app.container.use(
        'App/Controllers/Http/Interfaces/OrderRepositoryInterface',
      )
      return new OrderService(repo)
    })

    this.app.container.singleton('App/Controllers/Http/Controllers/OrderController', () => {
      const service = this.app.container.use('App/Controllers/Http/Services/OrderService')
      return new OrderController(service)
    })
  }
}
