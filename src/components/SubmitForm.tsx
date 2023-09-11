"use client";

import React from "react";
import { Input, Textarea } from "@nextui-org/input";

import cx from "classnames";
import styles from "./SubmitForm.module.scss";
import { Button, Card, CardBody, CardFooter, CardHeader, Spacer } from "@nextui-org/react";

interface Props {}

export default function SubmitForm() {
  return (
    <Card className="p-4 max-w-[600px] ">
      <CardHeader>찬조신청</CardHeader>
      <CardBody>
        <div className={styles.inputContainer}>
          <Input className={styles.input} type="text" label="단체 · 성함" labelPlacement="outside-left" />
          <Input className={styles.input} type="phone" label="전화번호" labelPlacement="outside-left" />
          <Input className={styles.input} type="text" label="지역" labelPlacement="outside-left" />
          <Input className={styles.input} type="date" label="날짜" labelPlacement="outside-left" />
          <Textarea
            className={styles.textarea}
            label="요청사항"
            labelPlacement="outside-left"
            placeholder="Enter your email"
            minRows={2}
          />
        </div>
      </CardBody>
      {/* <h2>WHO 응원단을 위해 </h2> */}
      <CardFooter>
        <Button>신청하기</Button>
      </CardFooter>
    </Card>
  );
}
