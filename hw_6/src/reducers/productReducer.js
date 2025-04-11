import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy S21',
    description: 'Флагманский смартфон с отличной камерой и производительностью',
    price: 54990,
    category: 'Электроника'
  },
  {
    id: 2,
    name: 'Ноутбук ASUS ZenBook',
    description: 'Тонкий и легкий ноутбук для работы и развлечений',
    price: 89990,
    category: 'Компьютеры',
    available: true
  },
  {
    id: 3,
    name: 'Наушники Sony WH-1000XM4',
    description: 'Беспроводные наушники с шумоподавлением',
    price: 27990,
    category: 'Аудио'
  },
  {
    id: 4,
    name: 'Умные часы Apple Watch Series 7',
    description: 'Смарт-часы с множеством функций для здоровья и фитнеса',
    price: 36990,
    category: 'Гаджеты',
    available: true
  },
  {
    id: 5,
    name: 'Фотоаппарат Canon EOS R6',
    description: 'Беззеркальная камера для профессиональной съемки',
    price: 189990,
    category: 'Фото и видео',
    available: true
  }
];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: {
            reducer: (state, action) => {
                state.push(action.payload)
            },

            prepare: (data) => ({
                payload: {
                    id: Date.now(),
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category,
                    available: true
                }
            })
        },
        
        updateProduct: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload
            }
        },
        
        deleteProduct: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },

        toggleAvailability: (state, action) => {
            const product = state.find(product => product.id === action.payload);
            if (product) {
                product.available = !product.available;
            }
        }
    }
});

export const { addProduct, updateProduct, deleteProduct, toggleAvailability } = productSlice.actions

export const productReducer = productSlice.reducer;