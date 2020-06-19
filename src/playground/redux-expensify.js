import {createStore, combineReducers} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    } ={}
    ) =>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=(
    {
        id
    } ={}
    ) =>({
    type:'REMOVE_EXPENSE',
    id
    });

const editExpense=(id,updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
    })

const setTextFilter=(text='') =>({
    type:'TEXT_FILTER',
    text
})

const sortByAmount=() =>({
    type:'SORT_BY_AMOUNT_FILTER',
})

const sortByDate=() =>({
    type:'SORT_BY_DATE_FILTER',
})

const setStartDate=(startDate) =>({
    type:'SET_START_DATE',
    startDate
})

const setEndDate=(endDate) =>({
    type:'SET_END_DATE',
    endDate
})




const expenseReducerDefaultState =[];

const expenseReducer =(state=expenseReducerDefaultState,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id!=action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }

                }

            })
        default:
            return state;
    }

};

const filtersReducerDefaultState ={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined    
};
const filtersReducer =(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT_FILTER':
            return{
                ...state,
                sortBy:"amount"
            }
        case 'SORT_BY_DATE_FILTER':
            return{
                ...state,
                sortBy:"date"
                }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
                }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
                        }
        default:
            return state;
    }
};

const getVisibleExpenses =(expenses,{text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate!=='number' || expense.createdAt>=startDate;
        const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount? 1 : -1;
        }
    });
};

const store =createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filtersReducer
    }
));

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses =getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
    //console.log(store.getState());
});

const expenseone=store.dispatch(addExpense({description:'Rent',amount: 100,createdAt:-21000}));
const expensetwo=store.dispatch(addExpense({description:'coffee',amount: 400,createdAt:-1000}));

//store.dispatch(removeExpense({id:expenseone.expense.id}));
//store.dispatch(editExpense(expensetwo.expense.id,{amount:700}));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(2000))
//store.dispatch(setStartDate())

//store.dispatch(setEndDate(125))
//store.dispatch(setEndDate())


const demoState ={
    expenses:[{
        id: 'person1',
        description:'jan',
        note:'final payment',
        amount:54500,
        createdAt:0

    }],

    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

