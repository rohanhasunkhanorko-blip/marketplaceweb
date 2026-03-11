import Database from 'better-sqlite3';

const db = new Database('marketplace.db');
db.pragma('journal_mode = WAL');

// Initialize database schema
db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        price INTEGER NOT NULL,
        image_url TEXT NOT NULL,
        category_id INTEGER,
        FOREIGN KEY (category_id) REFERENCES categories(id)
    );
`);

// Function to seed initial data if empty
function seedDatabase() {
    const categoriesCount = db.prepare('SELECT COUNT(*) as count FROM categories').get();
    
    if (categoriesCount.count === 0) {
        console.log('Seeding initial Gucci mock data into database...');
        
        // Seed Categories
        const insertCategory = db.prepare('INSERT INTO categories (name, slug) VALUES (@name, @slug)');
        const categories = [
            { name: 'Women', slug: 'women' },
            { name: 'Men', slug: 'men' },
            { name: 'Handbags', slug: 'handbags' },
            { name: 'Gifts', slug: 'gifts' }
        ];
        
        for (const cat of categories) {
            insertCategory.run(cat);
        }

        // Seed Products
        const insertProduct = db.prepare('INSERT INTO products (title, price, image_url, category_id) VALUES (@title, @price, @image_url, @category_id)');
        const products = [
            { title: 'Gucci Horsebit 1955 shoulder bag', price: 2950, image_url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop', category_id: 3 },
            { title: "Women's Gucci Re-Web sneaker", price: 990, image_url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop', category_id: 1 },
            { title: 'GG Marmont small shoulder bag', price: 1750, image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop', category_id: 3 },
            { title: 'Ophidia GG mini bag', price: 1150, image_url: 'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?q=80&w=2070&auto=format&fit=crop', category_id: 3 }
        ];

        for (const prod of products) {
            insertProduct.run(prod);
        }
    }
}

seedDatabase();

export default db;
