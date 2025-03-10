// src/components/SummaryTable.jsx
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'; // Ensure correct path

import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'; // Ensure correct path

export default function SummaryTable() {
  const elements = useSelector((state) => state.kml.elements) || [];

  const summary = elements.reduce((acc, element) => {
    acc[element.type] = (acc[element.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <Card>
      <CardHeader>
        <CardTitle>KML Elements Summary</CardTitle>
      </CardHeader>
      <CardContent>
        {elements.length === 0 ? (
          <p className="text-gray-500 text-center">No data available</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element Type</TableHead>
                <TableHead>Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(summary).map(([type, count]) => (
                <TableRow key={type}>
                  <TableCell className="font-medium">{type}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
