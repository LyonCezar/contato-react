export default function Animal (props) { 
  const {
      nome,
      temperamento,
      children,
      olhos, 
      raca = 'undefined' } = props
      console.log(props)
  return (
  <div>{nome} {temperamento} {olhos} {raca} {children}   </div>
  )

}
