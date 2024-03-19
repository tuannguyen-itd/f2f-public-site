import React, { useState, useEffect } from 'react';
import { ICategory } from '@model/category.model';
import Link from 'next/link';

interface ICategoryProps {
  category: ICategory[];
}

const CategoryItem = (props: ICategoryProps) => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<number | null>(null);
  const [hoveredChildCategoryId, setHoveredChildCategoryId] = useState<number | null>(null);
  const buildCategoryTree = (categories: ICategory[]) => {
    const categoryMap: { [key: number]: ICategory } = {};

    categories.forEach((category) => {
      categoryMap[category.id] = category;
      category.children = [];
    });

    categories.forEach((category) => {
      if (category.parentId !== null) {
        const parentCategory = categoryMap[category.parentId];
        if (parentCategory) {
          parentCategory.children.push(category);
        }
      }
    });

    const rootCategories = categories.filter(category => category.parentId === null);

    return rootCategories;

  };

  useEffect(() => {
    setCategoryList(buildCategoryTree(props.category));
  }, [props.category]);

  const handleCategoryHover = (categoryId: number) => {
    setHoveredCategoryId(categoryId);
    setHoveredChildCategoryId(null); // Reset hovered child category ID
  };

  const handleChildCategoryHover = (childCategoryId: number) => {
    setHoveredChildCategoryId(childCategoryId);
  };

  const findChildrenByCategoryId = (categoryId: number): ICategory[] => {
    const category = categoryList.find(cat => cat.id === categoryId);
    return category ? category.children : [];
  };

  const findGrandChildrenById = (categoryId: number): ICategory[] => {
    const result: ICategory[] = [];

    const findChildrenRecursive = (category: ICategory) => {
      if (category.id === categoryId) {
        result.push(...category.children);
      } else {
        category.children.forEach(child => findChildrenRecursive(child));
      }
    };
    categoryList.forEach(category => findChildrenRecursive(category));
    return result;

  };

  return (
    <>
      <ul className="category-container pl-3 pr-3">
        {categoryList?.map((category, index) => (
          <li key={index} className="d-flex justify-content-between category-item" onMouseEnter={() => handleCategoryHover(category.id)}>
            <Link href={`/category${category.slug}`} as={`/category${category.slug}`}>
              <span className="sub-category-name">{category.name}</span>
            </Link>
            {category.children.length > 0 && (
              <span className="arrow fa fa-angle-right sub-category-arrow" />
            )}
          </li>
        ))}
      </ul>
      {hoveredCategoryId && (
      <ul className="sub-category pl-3 pr-3">
        {hoveredCategoryId !== null && findChildrenByCategoryId(hoveredCategoryId).map((childCategory, index) => (
          <li key={index} className="d-flex justify-content-between category-item" onMouseEnter={() => handleChildCategoryHover(childCategory.id)}>
            <Link href={`/category${childCategory.slug}`} as={`/category${childCategory.slug}`}>
              <span className="sub-category-name">{childCategory.name}</span>
            </Link>
            {childCategory.children.length > 0 && (
              <span className="arrow fa fa-angle-right sub-category-arrow" />
            )}
          </li>
        ))}
      </ul>
      )}
      {hoveredChildCategoryId && (
        <ul className="sub-category pl-3 pr-3">
          {hoveredChildCategoryId !== null && findGrandChildrenById(hoveredChildCategoryId)?.map((child, index) => (
            <li key={index} className="d-flex justify-content-between category-item">
              <Link href={`/category${child.slug}`} as={`/category${child.slug}`}>
                <span className="sub-category-name">{child.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

    </>
  );
};

export default CategoryItem;
