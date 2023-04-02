export let categories = [
  {
    name:'tv',
    label: 'TVs',
  },
  {
    name:'gameconsoles',
    label:'Game Consoles',
  },
  {
    name:'electronics',
    label:'Electronics',
  },
  {
    name:'headphones',
    label:'Headphones',
  },
  {
    name:'cellphones',
    label:'Cellphones',
  },
  {
    name:'laptops',
    label:'Laptops',
  },
  {
    name:'microcontrollers',
    label:'Micro-controllers'
  },
]

categories = categories
  .map((category,index) =>
    {
      category.id = index;
      return category
    }
  )

export const getCategory = (category) => {
  return categories.find((cat) => cat.name === category)
}