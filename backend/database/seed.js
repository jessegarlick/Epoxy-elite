import { QuoteRequest, db } from './model.js'; // Make sure the path to your model file is correct and includes db if needed

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

const quotes = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    streetAddress: "123 Maple Street",
    city: "Anytown",
    state: "CA",
    zipCode: "90210"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    streetAddress: "456 Oak Avenue",
    city: "Othertown",
    state: "TX",
    zipCode: "73301"
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    streetAddress: "789 Pine Road",
    city: "Somewhere",
    state: "NY",
    zipCode: "10001"
  }
];

try {
  for (const quoteData of quotes) {
    await QuoteRequest.create(quoteData);
  }
  console.log('Database seeded successfully!');
} catch (error) {
  console.error('Error seeding database:', error);
} finally {
  await db.close();  // Ensure the database connection is closed after seeding
}
