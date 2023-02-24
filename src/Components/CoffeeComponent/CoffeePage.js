import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, useMemo } from "react-redux";

import { loadCoffees } from "../../redux/actions";
import CoffeeList from "./CoffeeList";
import Navigation from "../Navigation";
import styles from "../../styles/Home.module.css";
import Pagination from "../Pagination";

export default function CoffeePage() {
  let PageSize = 10;
  const [coffeeList, setCoffeeList] = useState([]);
  const coffees = useSelector((state) => state.coffees);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoffees());
    setCoffeeList(coffees);
  }, []);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = coffeeList.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <Navigation />
      <h2 className={styles.coffeeHeading}>Coffssssas</h2>
      <div className={styles.coffeePageContainer}>
        {coffeeList && <CoffeeList coffees={currentItems} />}
      </div>
      <Pagination
        totalItems={coffeeList.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
