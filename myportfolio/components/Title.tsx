const Title = ({titleText} : {titleText: string}) => {
    return  <div className="w-3/4 mx-auto mt-28">
    <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
        {titleText}
    </div>
    </div>
}
export default Title;