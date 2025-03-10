// src/pages/Home.jsx  

import { useSelector } from 'react-redux';
import FileUpload from '../components/FileUpload';
import Map from '../components/Map';
import SummaryTable from '../components/SummaryTable';
import DetailedTable from '../components/DetailedTable';
import { Button } from '../components/ui/button'; // Ensure the correct path
import { useState } from 'react';

export default function Home() {
  const [showSummary, setShowSummary] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const fileName = useSelector((state) => state.kml.fileName);
  const isLoading = useSelector((state) => state.kml.isLoading);

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">KML File Viewer</h1>
        <p className="text-gray-600 mb-8">
          Upload a KML file to view and analyze its contents
        </p>
      </div>

      {/* File Upload Section */}
      <FileUpload />

      {/* File Information Section */}
      {fileName && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Current file: <span className="font-medium">{fileName}</span>
            </p>
            <div className="space-x-4">
              <Button onClick={() => setShowSummary(!showSummary)} variant="outline">
                {showSummary ? 'Hide' : 'Show'} Summary
              </Button>
              <Button onClick={() => setShowDetailed(!showDetailed)} variant="outline">
                {showDetailed ? 'Hide' : 'Show'} Detailed View
              </Button>
            </div>
          </div>

          {/* Map and Tables Section */}
          {!isLoading && (
            <>
              <Map />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {showSummary && <SummaryTable />}
                {showDetailed && <DetailedTable />}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
