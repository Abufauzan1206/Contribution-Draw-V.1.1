// =====================================================
// ABUFAUZAN TECH Cooperative Management Platform (CMP)
// Main Application Entry Point
// Version: 2.0 Development
// =====================================================

import { auth } from "./auth.js";
import "./drawEngine.js";
import "./navigation.js";
import "./splash.js";
import "./admin.js";
import "./members.js";
import "./ledger.js";
import "./payments.js";

console.log("CMP Main Application Loaded");
console.log("Authentication Ready:", auth);
