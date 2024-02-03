

function Button(props) {
   let {classMore,children}=props
    return (
        <button className={`${classMore} text-white rounded-sm p-1 cursor-pointer` }
           // onClick={()=>callback()}
           >
            {children}
        </button>
      );
}

export default Button;