import crypto from "crypto";

class ServiceManager {
  constructor() {
    this.services = [];
  }

  getServices() {
    return this.services;
  }

  getServiceById(id) {
    return this.services.find((service) => service.id === id);
  }

  createService(name, description, price, available) {
    const newService = {
      id: crypto.randomUUID(),
      name,
      description,
      price,
      available,
    };

    this.services.push(newService);
    return newService;
  }

  updateService(id, updatedData) {
    const service = this.getServiceById(id);
    if (!service) {
      return null;
    }
    service.name = updatedData.name ?? service.name;
    service.description = updatedData.description ?? service.description;
    service.price = updatedData.price ?? service.price;
    service.available = updatedData.available ?? service.available;
    return service;
  }

  deleteService(id) {
    const index = this.services.findIndex((service) => service.id === id);
    if (index === -1) {
      return false;
    }
    return this.services.splice(index, 1)[0];
  }
}
export default ServiceManager;
