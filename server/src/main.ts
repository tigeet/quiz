import { initMongoose } from "./mongoose";
import { initExpress } from "./express";
import { Quiz } from "./models/quiz";
import { initDatabase } from "./mock";
import cors from "cors";
async function run() {
  const mongoose = await initMongoose();
  const express = await initExpress();
}

run();
// initDatabase();
