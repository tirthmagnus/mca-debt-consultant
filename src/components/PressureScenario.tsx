"use client";
import { useState } from "react";

const states={
  before:{label:"Before service example",withdrawal:68,operating:32,stability:35,note:"Frequent MCA withdrawals can leave less cash available for payroll, inventory, taxes, and vendors."},
  after:{label:"After service example",withdrawal:38,operating:62,stability:67,note:"Illustrative example showing how a lower withdrawal burden could leave more room for normal business operations."},
};

export default function PressureScenario(){
  const[mode,setMode]=useState<keyof typeof states>("before");
  const s=states[mode];
  const after=mode==="after";
  return <div className={`dashboard ${after?"dashboardAfter":"dashboardBefore"}`}>
    <div className="dashTop"><div><span>ILLUSTRATIVE BEFORE / AFTER</span><strong>{s.label}</strong></div><div className="toggle"><button onClick={()=>setMode("before")} className={!after?"on beforeOn":""}>Before</button><button onClick={()=>setMode("after")} className={after?"on afterOn":""}>After</button></div></div>
    <div className="trendPanel"><div className="trendLabels"><span>Operating position</span><strong>{after?"Improving":"Constrained"}</strong></div><svg viewBox="0 0 420 140" role="img" aria-label="Illustrative business trend"><path d={after?"M10 118 C85 110 105 104 160 91 S260 64 315 47 S375 27 410 18":"M10 24 C75 36 110 48 155 58 S245 78 300 92 S370 110 410 121"} fill="none" stroke={after?"#42c98a":"#e05a5a"} strokeWidth="7" strokeLinecap="round"/><path d="M10 126 H410" stroke="rgba(255,255,255,.1)"/><path d="M10 92 H410" stroke="rgba(255,255,255,.07)"/><path d="M10 58 H410" stroke="rgba(255,255,255,.07)"/></svg></div>
    <div className="bars"><div><div className="barLabel"><span>MCA withdrawal share</span><strong>{s.withdrawal}%</strong></div><i><b className={after?"greenBar":"redBar"} style={{width:`${s.withdrawal}%`}}/></i></div><div><div className="barLabel"><span>Operating cash available</span><strong>{s.operating}%</strong></div><i><b className={after?"greenBar":"redBar"} style={{width:`${s.operating}%`}}/></i></div><div><div className="barLabel"><span>Operating flexibility index</span><strong>{s.stability}/100</strong></div><i><b className={after?"greenBar":"redBar"} style={{width:`${s.stability}%`}}/></i></div></div>
    <p>{s.note}</p><small>Illustrative interface example only. “After” does not represent a guaranteed result. Actual outcomes depend on the business, agreements, creditors, and available options.</small>
  </div>;
}
