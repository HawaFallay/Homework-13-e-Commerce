// import models
import Product, { belongsTo, belongsToMany } from './Product';
import Category, { hasMany } from './Category';
import Tag, { belongsToMany as _belongsToMany } from './Tag';
import ProductTag from './ProductTag';

// Products belongsTo Category
belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products
hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  unique: false
})

// Tags belongToMany Products (through ProductTag)
_belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
    unique: false
})
export default {
  Product,
  Category,
  Tag,
  ProductTag,
};
