import ChildComponent from "./childcomponent"

const ParentComponent = () => {
    let name = 'Name : '+"Muhammad Sabir"
    let fvtdish = 'FvtDish : '+ "Biryani"
    let fvtcolor = 'FvtColor : '+ "Black"
    return (
        <div className="flex flex-col justify-center  bg-gray-500 items-center">
            <ChildComponent name={name} />
            <ChildComponent fvtdish={fvtdish} />
            <ChildComponent fvtcolor={fvtcolor} />
        </div>
    )
}

export default ParentComponent