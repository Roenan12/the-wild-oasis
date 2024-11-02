import AddBooking from "../features/bookings/AddBooking";
import AddGuest from "../features/bookings/AddGuest";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ButtonGroup from "../ui/ButtonGroup";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />

      <ButtonGroup>
        <AddBooking />
        <AddGuest />
      </ButtonGroup>
    </>
  );
}

export default Bookings;
