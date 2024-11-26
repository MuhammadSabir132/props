const ChildComponent = (props: any) => {
    console.log(props)
    return (
        <div className="justify-center  items-center   bg-gray-500">
            <h1 className="text-3xl justify-center  items-center">
              {props.name} 
              {props.fvtdish}
              {props.fvtcolor}
            </h1>
        </div>
    )
}

export default ChildComponent