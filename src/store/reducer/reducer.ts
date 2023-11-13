
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// 定义一下 initialState  的类型
export interface CounterState {
    value: number
}

const initialState: CounterState = {
    // 他的value值是0
    value: 0,
}


export const counterSilce = createSlice({

    name: 'counter',
    // 定义了 initialState，表示状态的初始值。
    initialState,
// 在 reducers 字段中，定义了两个 reducer 函数：increment 和 decrement，它们分别用于增加和减少状态中的值。
    reducers: {
        increment: (state) => {
           console.log(state.value);
           
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
 
    extraReducers(builder) {
        //fulfilled是Redux Toolkit 的createAsyncThunk函数自动生成的
        
        builder.addCase(incrementAsync.fulfilled, (state, { payload }) => {
            state.value += payload
            console.log("asdfg")
        })
        .addCase(incrementAsync.pending,(state,{ payload }) => {
            console.log(state,"12345")
        })
    }
})

// 用redux的话 处理异步得下载一个redux-thunk 去处理异步
// 如果是 redux toolkit 内就有一个createAsyncThunk去处理异步
export const incrementAsync = createAsyncThunk<number>('incrementAsync', async () => {
    //pending（操作进行中）、fulfilled（操作成功）, rejected（操作失败）
    const res = await new Promise<number>(r => {
        setTimeout(() => {
            r(3)
        }, 2000)
    })
    return res
})



export const { increment, decrement, } = counterSilce.actions

export default counterSilce.reducer
