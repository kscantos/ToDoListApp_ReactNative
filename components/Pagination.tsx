import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from './styles';

interface PaginationProps<T> {
  //array
  data: T[];
  renderItem: ({ item }: { item: T }) => JSX.Element;
  itemsPerPage: number;
}

const Pagination = <T extends { id: string }>({
  data,
  renderItem,
  itemsPerPage,
}: PaginationProps<T>) => {
  //wat is the current page
  const [currentPage, setCurrentPage] = useState(1);
  //calculate
  const totalPages = Math.ceil(data.length / itemsPerPage);

  //get the list
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  //next
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  //return
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <View>
      <FlatList
        data={currentItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <View style={styles.paginationContainer}>
        <Button
          //back button
          title="Previous"
          onPress={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <Text style={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          title="Next"
          onPress={goToNextPage}
          disabled={currentPage === totalPages}
        />
      </View>
    </View>
  );
};

export default Pagination;
