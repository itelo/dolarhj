import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './logo.jpeg';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

function ChevronDownIcon({ width }) {
  return (
    <img
      style={{ width, height: width }}
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwOS4xMjEsMTI1Ljk2NmMtMy44MzgtMy44MzgtMTAuMDU1LTMuODM4LTEzLjg5MywwTDI1Ni4wMDUsMzY1LjE5NEwxNi43NzEsMTI1Ljk2NmMtMy44MzgtMy44MzgtMTAuMDU1LTMuODM4LTEzLjg5MywwICAgIGMtMy44MzgsMy44MzgtMy44MzgsMTAuMDU1LDAsMTMuODkzbDI0Ni4xOCwyNDYuMTc1YzEuODQyLDEuODQyLDQuMzM3LDIuODc4LDYuOTQ3LDIuODc4YzIuNjEsMCw1LjEwNC0xLjAzNiw2Ljk0Ni0yLjg3OCAgICBsMjQ2LjE3LTI0Ni4xNzVDNTEyLjk1OSwxMzYuMDIxLDUxMi45NTksMTI5LjgwNCw1MDkuMTIxLDEyNS45NjZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
    />
  );
}
function FacebookIcon({ width }) {
  return (
    <img
      style={{ width, height: width }}
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDguNzg4IDQwOC43ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOC43ODggNDA4Ljc4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM0NzU5OTM7IiBkPSJNMzUzLjcwMSwwSDU1LjA4N0MyNC42NjUsMCwwLjAwMiwyNC42NjIsMC4wMDIsNTUuMDg1djI5OC42MTZjMCwzMC40MjMsMjQuNjYyLDU1LjA4NSw1NS4wODUsNTUuMDg1ICBoMTQ3LjI3NWwwLjI1MS0xNDYuMDc4aC0zNy45NTFjLTQuOTMyLDAtOC45MzUtMy45ODgtOC45NTQtOC45MmwtMC4xODItNDcuMDg3Yy0wLjAxOS00Ljk1OSwzLjk5Ni04Ljk4OSw4Ljk1NS04Ljk4OWgzNy44ODIgIHYtNDUuNDk4YzAtNTIuOCwzMi4yNDctODEuNTUsNzkuMzQ4LTgxLjU1aDM4LjY1YzQuOTQ1LDAsOC45NTUsNC4wMDksOC45NTUsOC45NTV2MzkuNzA0YzAsNC45NDQtNC4wMDcsOC45NTItOC45NSw4Ljk1NSAgbC0yMy43MTksMC4wMTFjLTI1LjYxNSwwLTMwLjU3NSwxMi4xNzItMzAuNTc1LDMwLjAzNXYzOS4zODloNTYuMjg1YzUuMzYzLDAsOS41MjQsNC42ODMsOC44OTIsMTAuMDA5bC01LjU4MSw0Ny4wODcgIGMtMC41MzQsNC41MDYtNC4zNTUsNy45MDEtOC44OTIsNy45MDFoLTUwLjQ1M2wtMC4yNTEsMTQ2LjA3OGg4Ny42MzFjMzAuNDIyLDAsNTUuMDg0LTI0LjY2Miw1NS4wODQtNTUuMDg0VjU1LjA4NSAgQzQwOC43ODYsMjQuNjYyLDM4NC4xMjQsMCwzNTMuNzAxLDB6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
    />
  );
}
function WhatsappIcon({ width }) {
  return (
    <img
      style={{ width, height: width }}
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0VERURFRDsiIGQ9Ik0wLDUxMmwzNS4zMS0xMjhDMTIuMzU5LDM0NC4yNzYsMCwzMDAuMTM4LDAsMjU0LjIzNEMwLDExNC43NTksMTE0Ljc1OSwwLDI1NS4xMTcsMCAgUzUxMiwxMTQuNzU5LDUxMiwyNTQuMjM0UzM5NS40NzYsNTEyLDI1NS4xMTcsNTEyYy00NC4xMzgsMC04Ni41MS0xNC4xMjQtMTI0LjQ2OS0zNS4zMUwwLDUxMnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzU1Q0Q2QzsiIGQ9Ik0xMzcuNzEsNDMwLjc4Nmw3Ljk0NSw0LjQxNGMzMi42NjIsMjAuMzAzLDcwLjYyMSwzMi42NjIsMTEwLjM0NSwzMi42NjIgIGMxMTUuNjQxLDAsMjExLjg2Mi05Ni4yMjEsMjExLjg2Mi0yMTMuNjI4UzM3MS42NDEsNDQuMTM4LDI1NS4xMTcsNDQuMTM4UzQ0LjEzOCwxMzcuNzEsNDQuMTM4LDI1NC4yMzQgIGMwLDQwLjYwNywxMS40NzYsODAuMzMxLDMyLjY2MiwxMTMuODc2bDUuMjk3LDcuOTQ1bC0yMC4zMDMsNzQuMTUyTDEzNy43MSw0MzAuNzg2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVGRUZFOyIgZD0iTTE4Ny4xNDUsMTM1Ljk0NWwtMTYuNzcyLTAuODgzYy01LjI5NywwLTEwLjU5MywxLjc2Ni0xNC4xMjQsNS4yOTcgIGMtNy45NDUsNy4wNjItMjEuMTg2LDIwLjMwMy0yNC43MTcsMzcuOTU5Yy02LjE3OSwyNi40ODMsMy41MzEsNTguMjYyLDI2LjQ4Myw5MC4wNDFzNjcuMDksODIuOTc5LDE0NC43NzIsMTA1LjA0OCAgYzI0LjcxNyw3LjA2Miw0NC4xMzgsMi42NDgsNjAuMDI4LTcuMDYyYzEyLjM1OS03Ljk0NSwyMC4zMDMtMjAuMzAzLDIyLjk1Mi0zMy41NDVsMi42NDgtMTIuMzU5ICBjMC44ODMtMy41MzEtMC44ODMtNy45NDUtNC40MTQtOS43MWwtNTUuNjE0LTI1LjZjLTMuNTMxLTEuNzY2LTcuOTQ1LTAuODgzLTEwLjU5MywyLjY0OGwtMjIuMDY5LDI4LjI0OCAgYy0xLjc2NiwxLjc2Ni00LjQxNCwyLjY0OC03LjA2MiwxLjc2NmMtMTUuMDA3LTUuMjk3LTY1LjMyNC0yNi40ODMtOTIuNjktNzkuNDQ4Yy0wLjg4My0yLjY0OC0wLjg4My01LjI5NywwLjg4My03LjA2MiAgbDIxLjE4Ni0yMy44MzRjMS43NjYtMi42NDgsMi42NDgtNi4xNzksMS43NjYtOC44MjhsLTI1LjYtNTcuMzc5QzE5My4zMjQsMTM4LjU5MywxOTAuNjc2LDEzNS45NDUsMTg3LjE0NSwxMzUuOTQ1Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
    />
  );
}
function TwitterIcon({ width }) {
  return (
    <img
      style={{ width, height: width }}
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDExMi4xOTcgMTEyLjE5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NyAxMTIuMTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1NUFDRUU7IiBjeD0iNTYuMDk5IiBjeT0iNTYuMDk4IiByPSI1Ni4wOTgiLz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGMUYyRjI7IiBkPSJNOTAuNDYxLDQwLjMxNmMtMi40MDQsMS4wNjYtNC45OSwxLjc4Ny03LjcwMiwyLjEwOWMyLjc2OS0xLjY1OSw0Ljg5NC00LjI4NCw1Ljg5Ny03LjQxNyAgICBjLTIuNTkxLDEuNTM3LTUuNDYyLDIuNjUyLTguNTE1LDMuMjUzYy0yLjQ0Ni0yLjYwNS01LjkzMS00LjIzMy05Ljc5LTQuMjMzYy03LjQwNCwwLTEzLjQwOSw2LjAwNS0xMy40MDksMTMuNDA5ICAgIGMwLDEuMDUxLDAuMTE5LDIuMDc0LDAuMzQ5LDMuMDU2Yy0xMS4xNDQtMC41NTktMjEuMDI1LTUuODk3LTI3LjYzOS0xNC4wMTJjLTEuMTU0LDEuOTgtMS44MTYsNC4yODUtMS44MTYsNi43NDIgICAgYzAsNC42NTEsMi4zNjksOC43NTcsNS45NjUsMTEuMTYxYy0yLjE5Ny0wLjA2OS00LjI2Ni0wLjY3Mi02LjA3My0xLjY3OWMtMC4wMDEsMC4wNTctMC4wMDEsMC4xMTQtMC4wMDEsMC4xNyAgICBjMCw2LjQ5Nyw0LjYyNCwxMS45MTYsMTAuNzU3LDEzLjE0N2MtMS4xMjQsMC4zMDgtMi4zMTEsMC40NzEtMy41MzIsMC40NzFjLTAuODY2LDAtMS43MDUtMC4wODMtMi41MjMtMC4yMzkgICAgYzEuNzA2LDUuMzI2LDYuNjU3LDkuMjAzLDEyLjUyNiw5LjMxMmMtNC41OSwzLjU5Ny0xMC4zNzEsNS43NC0xNi42NTUsNS43NGMtMS4wOCwwLTIuMTUtMC4wNjMtMy4xOTctMC4xODggICAgYzUuOTMxLDMuODA2LDEyLjk4MSw2LjAyNSwyMC41NTMsNi4wMjVjMjQuNjY0LDAsMzguMTUyLTIwLjQzMiwzOC4xNTItMzguMTUzYzAtMC41ODEtMC4wMTMtMS4xNi0wLjAzOS0xLjczNCAgICBDODYuMzkxLDQ1LjM2Niw4OC42NjQsNDMuMDA1LDkwLjQ2MSw0MC4zMTZMOTAuNDYxLDQwLjMxNnoiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
    />
  );
}

function TelegramIcon({ width }) {
  return (
    <img
      style={{ width, height: width }}
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojN0FBNURBOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM1Nzg2QjU7IiBkPSJNNTExLjkyNCwyNTAuMDc3TDM5OC4yODMsMTM2LjYyNWwtMTg1LjEwOCwyMjUuNjNsMTMzLjI4NCwxMzMuMjg0ICBDNDQzLjE5Nyw0NTguOTg4LDUxMiwzNjUuNTM1LDUxMiwyNTZDNTEyLDI1NC4wMTksNTExLjk2OSwyNTIuMDQ1LDUxMS45MjQsMjUwLjA3N3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zODMuNzE3LDEzMy41MmMxMC4yMDYtMy45ODIsMjAuNzU2LDQuOTQ4LDE4LjUxNSwxNS42N2wtNDUuNzcsMjE4Ljc4MSAgYy0yLjEzOCwxMC4yNTctMTQuMTg4LDE0Ljg3Ny0yMi42MzUsOC42NzFsLTY5LjA5NC01MC43MTdsLTM1LjIxOSwzNS45NjFjLTYuMTg5LDYuMzEtMTYuODYsMy43NDEtMTkuNTE1LTQuNjcybC0yNS40MS04MC42NjIgIGwtNjguMTEyLTIwLjExOGMtOC45NDctMi42MzgtOS40NjQtMTUuMDg0LTAuNzkzLTE4LjQ4TDM4My43MTcsMTMzLjUyeiBNMzUwLjExOCwxODIuMDY1YzIuOTgyLTIuNjM4LTAuNDgzLTcuMjkyLTMuODYyLTUuMTg5ICBsLTE0Ny4wMTUsOTEuMTc3Yy0yLjU4NiwxLjYwMy0zLjc3NSw0Ljc1OC0yLjg2Miw3LjY3MWwyMC4wNDksODguMDRjMC4zOTcsMS4zNDUsMi4zMjcsMS4xNTUsMi41LTAuMjQxbDQuNDgyLTY3LjA5NCAgYzAuMTcyLTEuNjU1LDAuOTY1LTMuMTcyLDIuMjA3LTQuMjc1TDM1MC4xMTgsMTgyLjA2NXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzlFQzJFNTsiIGQ9Ik0zNDYuMjU3LDE3Ni44NzZjMy4zNzktMi4xMDMsNi44NDQsMi41NTEsMy44NjIsNS4xODlsLTEyNC41LDExMC4wODkgIGMtMS4yNDEsMS4xMDMtMi4wMzQsMi42Mi0yLjIwNyw0LjI3NWwtNC40ODIsNjcuMDk0Yy0wLjE3MiwxLjM5Ni0yLjEwMywxLjU4Ni0yLjUsMC4yNDFsLTIwLjA0OS04OC4wNCAgYy0wLjkxNC0yLjkxMywwLjI3Ni02LjA2OCwyLjg2Mi03LjY3MUwzNDYuMjU3LDE3Ni44NzZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjE3LjE1NCwzNjQuNjc4Yy0zLjI0MS0xLjE1NS01Ljk4Mi0zLjc0MS03LjE1NC03LjQ2NWwtMjUuNDEtODAuNjYybC02OC4xMTItMjAuMTE4ICBjLTguOTQ3LTIuNjM4LTkuNDY0LTE1LjA4NC0wLjc5My0xOC40OEwzODMuNzE3LDEzMy41MmM2LjU4NS0yLjU2OSwxMy4zMjYsMC4yNDEsMTYuNjUzLDUuNDQ4ICBjLTAuNjIxLTAuOTQ4LTEuMzYyLTEuODI3LTIuMTg5LTIuNjAzTDIxNi4zNDMsMjg0LjgxdjYuNDk5bC0xLTAuNzI0bDEsNDAuOTI2djMyLjgyM2MwLjI1OSwwLjEyMSwwLjUzNCwwLjIyNCwwLjgxLDAuMzFWMzY0LjY3OCAgTDIxNy4xNTQsMzY0LjY3OHoiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTQwMi41MjUsMTQ1LjUxOGMwLjA1MiwxLjE3Mi0wLjAzNCwyLjQxMy0wLjI5MywzLjY3MmwtNDUuNzcsMjE4Ljc4MSAgIGMtMi4xMzgsMTAuMjU3LTE0LjE4OCwxNC44NzctMjIuNjM1LDguNjcxbC02OS4wOTQtNTAuNzE3bC00OC4zOS0zNC42MTZ2LTYuNDk5bDE4MS44MzgtMTQ4LjQ0NiAgIGMwLjgyNywwLjc3NiwxLjU2OSwxLjY1NSwyLjE4OSwyLjYwM2MwLjEyMSwwLjIwNywwLjI0MSwwLjM5NiwwLjM2MiwwLjU4NmMwLjEwMywwLjIwNywwLjIyNCwwLjQxNCwwLjMyOCwwLjYwMyAgIGMwLjEwMywwLjIwNywwLjIwNywwLjQxNCwwLjI5MywwLjYyMWMwLjEwMywwLjIyNCwwLjE5LDAuNDMxLDAuMjc2LDAuNjU1YzAuMDY5LDAuMTksMC4xNTUsMC4zOTYsMC4yMjQsMC42MjEgICBjMC4yMjQsMC42NzIsMC4zOTYsMS4zNjIsMC41MTcsMi4wODZDNDAyLjQzOSwxNDQuNTg3LDQwMi40OTEsMTQ1LjAzNiw0MDIuNTI1LDE0NS41MTh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRDFEMUQxOyIgZD0iTTI2NC43MzMsMzI1LjkyNWwtMzUuMjE5LDM1Ljk2MWMtMC4yOTMsMC4yOTMtMC42MDMsMC41ODYtMC45MTQsMC44NDUgICBjLTAuMzEsMC4yNTktMC42MjEsMC40ODMtMC45NDgsMC43MDdjLTAuMDE3LDAuMDE3LTAuMDE3LDAuMDE3LTAuMDE3LDAuMDE3Yy0wLjY1NSwwLjQzMS0xLjMyNywwLjc5My0yLjAzNCwxLjA4NiAgIGMtMC4zNjIsMC4xMzgtMC43MDcsMC4yNzYtMS4wNjksMC4zNjJjLTEuNSwwLjQ0OC0zLjAzNCwwLjU2OS00LjU1MSwwLjQxNGMtMC4zOTYtMC4wMzQtMC43OTMtMC4xMDMtMS4xNzItMC4xNzIgICBjLTAuMDUyLDAtMC4xMDMtMC4wMTctMC4xNTUtMC4wMzRjLTAuMzc5LTAuMTAzLTAuNzU5LTAuMjA3LTEuMTM4LTAuMzI4Yy0wLjEyMS0wLjAzNC0wLjI0MS0wLjA2OS0wLjM2Mi0wLjEzOGwtMC44MS0zMy4xMzMgICB2LTQwLjIwMkwyNjQuNzMzLDMyNS45MjV6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojREFEREUwOyIgZD0iTTIyOC42LDM2Mi43M2MtMC4zMSwwLjI1OS0wLjYyMSwwLjUtMC45NDgsMC43MjR2LTAuMDE3ICAgQzIyNy45OCwzNjMuMjEzLDIyOC4yOSwzNjIuOTg5LDIyOC42LDM2Mi43M3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQURERTA7IiBkPSJNMjI3LjY1MiwzNjMuNDM3djAuMDE3YzAsMCwwLTAuMDE3LTAuMDE3LDBDMjI3LjYzNSwzNjMuNDU0LDIyNy42MzUsMzYzLjQ1NCwyMjcuNjUyLDM2My40Mzd6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojREFEREUwOyIgZD0iTTIyNS42MDEsMzY0LjU0MWMwLjcwNy0wLjI5MywxLjM3OS0wLjY1NSwyLjAzNC0xLjA4NiAgIEMyMjYuOTgsMzYzLjg4NSwyMjYuMjksMzY0LjI0NywyMjUuNjAxLDM2NC41NDF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojREFEREUwOyIgZD0iTTIxOS45ODEsMzY1LjMxNmMxLjUxNywwLjE1NSwzLjA1MSwwLjAzNCw0LjU1MS0wLjQxNGMtMS4wODYsMC4zNDUtMi4yMDcsMC41LTMuMzI3LDAuNSAgIGMtMC4zNDUsMC0wLjY5LTAuMDE3LTEuMDE3LTAuMDUyQzIyMC4xMTksMzY1LjM1MSwyMjAuMDUsMzY1LjM1MSwyMTkuOTgxLDM2NS4zMTZ6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIyMS4yMDUsMzY1LjQwMmMtMC4zNDUsMC0wLjY5LTAuMDE3LTEuMDE3LTAuMDUyQzIyMC41MTUsMzY1LjM4NSwyMjAuODYsMzY1LjQwMiwyMjEuMjA1LDM2NS40MDJ6ICAgIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIxOS45ODEsMzY1LjMxNmMwLjA2OSwwLjAzNCwwLjEzOCwwLjAzNCwwLjIwNywwLjAzNGMtMC4zNjItMC4wMTctMC42OS0wLjA2OS0xLjAzNC0wLjEzOCAgIEMyMTkuNDI5LDM2NS4yNjUsMjE5LjcwNSwzNjUuMjk5LDIxOS45ODEsMzY1LjMxNnoiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNEQURERTA7IiBkPSJNMjE5Ljk4MSwzNjUuMzE2Yy0wLjI3Ni0wLjAxNy0wLjU1Mi0wLjA1Mi0wLjgyNy0wLjEwM2MtMC4xMjEtMC4wMTctMC4yNDEtMC4wMzQtMC4zNDUtMC4wNjkgICBDMjE5LjE4OCwzNjUuMjEzLDIxOS41ODQsMzY1LjI4MiwyMTkuOTgxLDM2NS4zMTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojREFEREUwOyIgZD0iTTIxNy41MTYsMzY0Ljc4MmMwLjM3OSwwLjEyMSwwLjc1OSwwLjIyNCwxLjEzOCwwLjMyOGMtMC4xNTUtMC4wMzQtMC4zMS0wLjA2OS0wLjQ2NS0wLjEwMyAgIGMtMC4wNjktMC4wMTctMC4xMzgtMC4wMzQtMC4xOS0wLjA2OUMyMTcuODQzLDM2NC45MDMsMjE3LjY3MSwzNjQuODUxLDIxNy41MTYsMzY0Ljc4MnoiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjE4LjE4OCwzNjUuMDA2YzAuMTU1LDAuMDM0LDAuMzEsMC4wNjksMC40NjUsMC4xMDMgICBDMjE4LjQ5OCwzNjUuMDkyLDIxOC4zNDMsMzY1LjA1OCwyMTguMTg4LDM2NS4wMDZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIxNy41MTYsMzY0Ljc4MmMwLjE1NSwwLjA2OSwwLjMyOCwwLjEyMSwwLjQ4MywwLjE1NWMtMC4yNTktMC4wNTItMC41MTctMC4xMzgtMC43NzYtMC4yNDEgICBDMjE3LjMyNiwzNjQuNzMsMjE3LjQxMiwzNjQuNzY1LDIxNy41MTYsMzY0Ljc4MnoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojREFEREUwOyIgZD0iTTIxNy41MTYsMzY0Ljc4MmMtMC4xMDMtMC4wMTctMC4xOS0wLjA1Mi0wLjI5My0wLjA4NmMtMC4wMTcsMC4wMTctMC4wNTIsMC0wLjA2OS0wLjAxN3YtMC4wMzQgIEMyMTcuMjc0LDM2NC43MTMsMjE3LjM5NSwzNjQuNzQ3LDIxNy41MTYsMzY0Ljc4MnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0QxRDFEMTsiIGQ9Ik0yMTYuMzQzLDMzMS41MTFsMC44MSwzMy4xMzNjLTAuMjc2LTAuMDg2LTAuNTUyLTAuMTktMC44MS0wLjMxVjMzMS41MTF6Ii8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQURERTA7IiBwb2ludHM9IjIxNi4zNDMsMjkxLjMwOSAyMTYuMzQzLDMzMS41MTEgMjE1LjM0MywyOTAuNTg1ICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQURCQ0M5OyIgZD0iTTM1MC4xMTgsMTgyLjA2NWwtMTI0LjUsMTEwLjA4OWMtMS4yNDEsMS4xMDMtMi4wMzQsMi42Mi0yLjIwNyw0LjI3NWwtNC40NzQsNjcuMSAgYy0wLjE3MiwxLjM5Ni0yLjEwMywxLjU4Ni0yLjUxNywwLjI0MWwtMjAuMDQtODguMDQ1Yy0wLjkxNC0yLjkxMywwLjI3Ni02LjA2OCwyLjg2Mi03LjY3MWwxNDcuMDE1LTkxLjE3NyAgQzM0OS42MzYsMTc0Ljc3MywzNTMuMTAxLDE3OS40MjgsMzUwLjExOCwxODIuMDY1eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
    />
  );
}
class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <img src={logo} style={{ width: '100vw' }} />
          </Grid>
          <Grid item style={{ marginTop: 24 }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="start"
            >
              <Typography variant="caption">US$1,00 =</Typography>
              <Typography
                variant="body1"
                style={{
                  fontSize: 64,
                  fontWeight: 100,
                  marginTop: -16,
                  marginLeft: -5
                }}
              >
                R$3,42
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ fontSize: 32, fontWeight: 100 }}
            >
              BRL<ChevronDownIcon width={20} />
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: 112 }}>
            <Typography
              variant="body1"
              style={{ fontSize: 18, fontWeight: 300 }}
            >
              SHARE WITH YOUR FRIENDS
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-around"
              style={{ marginTop: 16 }}
            >
              <FacebookIcon width={36} />
              <WhatsappIcon width={36} />
              <TwitterIcon width={36} />
              <TelegramIcon width={36} />
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{ position: 'absolute', bottom: 8, left: 'calc(50% - 12px)' }}
        >
          <ChevronDownIcon />
        </div>
      </div>
    );
  }
}

export default App;
