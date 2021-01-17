// components/BaseMovement/BaseMovement.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        name:'',
        needTime:false,
        movementList:[
            {
                weight:'',
                number:'',
                minutes:'',
            }
        ],
        demo:{
            weight:'',
            number:'',
            minutes:'',
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addMovement(){
            let movementList = this.data.movementList
            let demo = {
                weight:'',
                number:'',
                minutes:'',
            }
            movementList.push(demo)
            this.setData({
                movementList:movementList
            })
        },
        deleteItem(event){
            const idx = event.currentTarget.dataset.idx;
            console.log("idx",idx)
            let movementList = this.data.movementList
            console.log(movementList)
            movementList.splice(idx,1)
            this.setData({
                movementList:movementList
            })
        },
        getInputValue(event){
            console.log(event)
            const value = event.detail.value
            const name = event.currentTarget.dataset.name
            const idx = event.currentTarget.dataset.idx
            const str = `movementList[${idx}].${name}`
            this.setData({[str]:value})
            console.log(this.data.movementList)
        },
        changeTimeWatch(event){
            const need = event.currentTarget.dataset.need
            this.setData({'needTime':!need})
        },
        inputGetValue(e){
            this.setData({'name':e.detail})
        },
        // submit(){
        //     console.log(this.data)
        // }
    }
})
