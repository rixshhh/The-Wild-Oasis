
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from '../features/cabins/CabinTable'
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from '../features/cabins/CreateCabinForm'
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {

  const [showForm , setShowForm] = useState(false);

  // useEffect(function(){
  //   getaCabin().then((data) => console.log(data));
  // },[]);

  return (
    <>
     <Row type="horizontal">
      <Heading as="h1">All cabins</Heading> 
      <CabinTableOperations/>
    </Row>

    <CabinTable/>
    <Button onClick={() => setShowForm((show) =>!show)}>Add new Cabin</Button>
      {showForm && <CreateCabinForm/>}
    </>
   
  );
}

export default Cabins;
