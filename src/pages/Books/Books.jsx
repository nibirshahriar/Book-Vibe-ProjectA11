import React, { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishList from "../../components/ListedBooks/ListedWishList";

const Books = () => {
  const { storeBooks, wishlist } = useContext(BookContext);
  return (
    <div className="container mx-auto my-10">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
