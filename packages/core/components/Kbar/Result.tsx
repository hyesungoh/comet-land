// import { useTheme } from '@nextui-org/react';
// import { useKBar } from 'kbar';
// import { useMemo } from 'react';
// import { KBarResultsProps } from './types';

// export function Result({}: KBarResultsProps) {
//   const { theme } = useTheme();

//   const { search, actions, currentRootActionId, query } = useKBar(state => ({
//     search: state.searchQuery,
//     currentRootActionId: state.currentRootActionId,
//     actions: state.actions,
//   }));

//   const actionsList = useMemo(() => {
//     return Object.keys(actions).map(key => actions[key]);
//   }, [actions]);

//   const currActions = useMemo(() => {
//     if (!currentRootActionId) {
//       return actionsList.reduce((acc: any, curr) => {
//         if (!curr.parent) {
//           acc[curr.id] = curr;
//         }
//         return acc;
//       }, {});
//     }

//     const root = actions[currentRootActionId];
//     const children = root.children;

//     if (!children) {
//       return {
//         [root.id]: root,
//       };
//     }

//     return {
//       ...children.reduce((acc: any, actionId) => {
//         acc[actionId] = actions[actionId];
//         return acc;
//       }, {}),
//     };
//   }, [actions, actionsList, currentRootActionId]);

//   return <div></div>;
// }

import { KBarResults, useMatches } from 'kbar';

export function KBarResult() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? '#eee' : 'transparent',
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}
