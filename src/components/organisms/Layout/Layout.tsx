import {Navbar} from './Navbar'
import {SubNavbar} from './SubNavbar'

declare type DefaultLayoutProps = {
  children: any
}

export const Layout = ({children}: DefaultLayoutProps) => {
  return (
    <section>
      <div className="h-screen flex">
        <Navbar/>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <main className="flex flex-1 overflow-hidden">
            <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex flex-1 xl:overflow-hidden">
                <SubNavbar/>

                <div className="flex-1 xl:overflow-y-auto">
                  <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
