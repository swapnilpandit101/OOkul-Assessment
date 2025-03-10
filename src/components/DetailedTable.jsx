// src/components/DetailedTable.jsx
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function DetailedTable() {
  const elements = useSelector(state => state.kml.elements);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Elements Information</CardTitle>
      </CardHeader>
      <CardContent>
        {elements.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element Type</TableHead>
                <TableHead>Length (km)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {elements.map((element, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{element.type}</TableCell>
                  <TableCell>
                    {typeof element.length === 'number' ? element.length.toFixed(2) : 'N/A'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-500 text-center">No elements to display.</p>
        )}
      </CardContent>
    </Card>
  );
}
