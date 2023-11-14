

import Link from 'next/link'
import React from 'react'
import {Card, CardBody} from "@nextui-org/react";

const AccessDenied = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <Card>
        <CardBody>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">[Error]: Access Denied!... </h2>
            <p className="text-sm text-red-600">
              [Error]: You are not Authorize to visit this page{" "}
            </p>
            <div>
              <Link href="/">Go back to Home</Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AccessDenied