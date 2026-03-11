import db from '$lib/server/db';

export function load() {
    const products = db.prepare('SELECT p.*, c.name as category_name FROM products p LEFT JOIN categories c ON p.category_id = c.id').all();
    
    return {
        products
    };
}
