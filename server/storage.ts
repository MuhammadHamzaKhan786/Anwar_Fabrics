import { type Product, type InsertProduct, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Product operations
  getProducts(category?: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, updates: Partial<Product>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;
  getProductsByCategory(category: string): Promise<Product[]>;

  // Contact operations
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.products = new Map();
    this.contacts = new Map();
    this.seedData();
  }

  private seedData() {
    // Create sample dupatta products
    const sampleProducts: InsertProduct[] = [
      // Crystal Tissue Category
      {
        name: "Premium Crystal Tissue Dupatta",
        description: "Elegant crystal tissue dupatta with delicate shimmer and soft drape. Perfect for formal occasions and festive wear.",
        price: "25.99",
        category: "crystal-tissue",
        imageUrl: "https://images.unsplash.com/photo-1594736797933-d0c5fc2c99e4?w=500&h=600&fit=crop",
        inStock: 15
      },
      {
        name: "Royal Crystal Tissue Dupatta",
        description: "Luxurious crystal tissue dupatta with gold thread work and intricate patterns. A statement piece for special events.",
        price: "45.99",
        category: "crystal-tissue",
        imageUrl: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=500&h=600&fit=crop",
        inStock: 8
      },
      {
        name: "Crystal Tissue Party Dupatta",
        description: "Sparkling crystal tissue dupatta with beautiful border work. Ideal for weddings and celebrations.",
        price: "35.99",
        category: "crystal-tissue",
        imageUrl: "https://images.unsplash.com/photo-1506629905252-6d54ad1dc874?w=500&h=600&fit=crop",
        inStock: 12
      },

      // Dull Tissue Category
      {
        name: "Classic Dull Tissue Dupatta",
        description: "Traditional dull tissue dupatta with matte finish. Comfortable and versatile for daily wear and casual events.",
        price: "18.99",
        category: "dull-tissue",
        imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop",
        inStock: 20
      },
      {
        name: "Embroidered Dull Tissue Dupatta",
        description: "Beautiful dull tissue dupatta with traditional embroidery work. Perfect blend of elegance and comfort.",
        price: "32.99",
        category: "dull-tissue",
        imageUrl: "https://images.unsplash.com/photo-1583292650885-d89e8c12c0c7?w=500&h=600&fit=crop",
        inStock: 14
      },
      {
        name: "Printed Dull Tissue Dupatta",
        description: "Stylish dull tissue dupatta with contemporary prints. Great for modern fashion with traditional touch.",
        price: "22.99",
        category: "dull-tissue",
        imageUrl: "https://images.unsplash.com/photo-1594736797487-d0c5fc2c99e4?w=500&h=600&fit=crop",
        inStock: 18
      },

      // Chamak Net Category
      {
        name: "Glittering Chamak Net Dupatta",
        description: "Stunning chamak net dupatta with metallic threads and sparkling finish. Perfect for glamorous occasions.",
        price: "38.99",
        category: "chamak-net",
        imageUrl: "https://images.unsplash.com/photo-1506629905315-89a9b0c1a84f?w=500&h=600&fit=crop",
        inStock: 10
      },
      {
        name: "Designer Chamak Net Dupatta",
        description: "Designer chamak net dupatta with intricate patterns and shimmering details. A must-have for special occasions.",
        price: "52.99",
        category: "chamak-net",
        imageUrl: "https://images.unsplash.com/photo-1583292650901-7d22cd27ca8f?w=500&h=600&fit=crop",
        inStock: 6
      },
      {
        name: "Festive Chamak Net Dupatta",
        description: "Celebratory chamak net dupatta with rich colors and festive appeal. Ideal for cultural events and parties.",
        price: "42.99",
        category: "chamak-net",
        imageUrl: "https://images.unsplash.com/photo-1590736969964-71cc94901155?w=500&h=600&fit=crop",
        inStock: 9
      },

      // Dull Net Category
      {
        name: "Elegant Dull Net Dupatta",
        description: "Sophisticated dull net dupatta with subtle texture and comfortable feel. Perfect for everyday elegance.",
        price: "16.99",
        category: "dull-net",
        imageUrl: "https://images.unsplash.com/photo-1594736797526-d0c5fc2c99f4?w=500&h=600&fit=crop",
        inStock: 25
      },
      {
        name: "Embellished Dull Net Dupatta",
        description: "Beautiful dull net dupatta with delicate embellishments and fine craftsmanship. Timeless elegance.",
        price: "28.99",
        category: "dull-net",
        imageUrl: "https://images.unsplash.com/photo-1506629905281-89a9b0c1a85f?w=500&h=600&fit=crop",
        inStock: 16
      },
      {
        name: "Traditional Dull Net Dupatta",
        description: "Classic dull net dupatta with traditional motifs and patterns. Heritage style with modern comfort.",
        price: "24.99",
        category: "dull-net",
        imageUrl: "https://images.unsplash.com/photo-1583292650912-7d22cd27ca9f?w=500&h=600&fit=crop",
        inStock: 22
      }
    ];

    // Add sample products
    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  async getProducts(category?: string): Promise<Product[]> {
    const allProducts = Array.from(this.products.values());
    if (category) {
      return allProducts.filter(product => product.category === category);
    }
    return allProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = {
      ...insertProduct,
      id,
      createdAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | undefined> {
    const product = this.products.get(id);
    if (!product) return undefined;
    
    const updatedProduct = { ...product, ...updates };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
